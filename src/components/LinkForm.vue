<template>
  <form @submit="handleSubmit">
    <div :class="['link-form-group', focused ? 'active' : '']">
      <input
        type="text"
        name="link"
        class="link-input"
        placeholder="Paste URL Here"
        :readonly="generating"
        @focus="focused = true"
        @blur="focused = false"
        @paste="handlePaste"
        @input="handleInput"
      />
      <button type="submit" class="submit-button" :disabled="generating">
        <SubmitArrow v-if="!generating && !completed" />
        <LoadingCircle v-if="generating" />
        <CopiedText v-if="completed" @click="copyLink" />
        <ErrorIcon v-if="error" />
      </button>
    </div>
    <ErrorText v-if="error" />
  </form>
</template>

<script>
import SubmitArrow from './../assets/SubmitArrow'
import LoadingCircle from './../assets/LoadingCircle'
import CopiedText from './../assets/CopiedText'
import ErrorIcon from './../assets/ErrorIcon'
import ErrorText from './../assets/ErrorText'
import Config from './../../short-url.config'

export default {
  components: {
    SubmitArrow,
    LoadingCircle,
    CopiedText,
    ErrorIcon,
    ErrorText,
  },
  data() {
    return {
      focused: false,
      pasted: false,
      generating: false,
      completed: false,
      error: false,
    }
  },
  methods: {
    handlePaste() {
      return (this.pasted = true)
    },

    handleInput() {
      this.completed = false
      if (!this.pasted) {
        return
      }
      this.pasted = false // Reset pasted for next link generation
      return this.generateLink()
    },

    handleSubmit(e) {
      e.preventDefault()
      if (this.generating) {
        return
      }
      return this.generateLink()
    },

    generateLink() {
      const input = document.querySelector('.link-input')
      const link = input.value
      console.log(Config.app_url)
      if (link.includes(Config.app_url)) {
        return // Return early if it's already a link
      }
      if (link === '') {
        return // Return early if there's no content
      }

      this.generating = true
      this.completed = false
      fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: link,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.generating = false
          this.completed = true
          input.value = data.linkTo
          this.copyLink()
        })
        .catch(() => {
          this.generating = false
          this.error = true
        })
    },
    copyLink() {
      const input = document.querySelector('.link-input')
      input.focus()
      input.select()
      navigator.clipboard.writeText(input.value)
    },
  },
}
</script>

<style scoped lang="scss">
.link-form-group {
  display: flex;
  flex-direction: row;
  border: #cccccc 3px solid;
  border-radius: 100px;
  overflow: hidden;
  background-color: white;
}

.link-input {
  padding: 10px 30px;
  font-size: 1.1rem;
  color: #333333;
  flex-grow: 2;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 0rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #555555;
    transition: 0.2s ease;
  }

  &:focus::placeholder {
    color: #cccccc;
    transition: 0.2s ease;
  }

  &:read-only {
    color: #999999;
    transition: 0.2s ease;
  }
}

.submit-button {
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 1.25rem;
  background: transparent;
  border: none;
  color: #666666;
  height: auto;
  cursor: pointer;

  svg {
    border: 2px solid transparent;
    width: 1.5rem;
    height: 1.5rem;
  }

  &:focus {
    outline: none;

    svg {
      border-radius: 100px;
      border: 2px solid red;
    }
  }
}

.active {
  border: #df0000 3px solid !important;
}
</style>
