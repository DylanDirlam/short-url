<template>
  <section class="app">
    <Logo />
    <Title />
    <Description />
    <LinkForm />
  </section>
</template>

<script>
import Logo from './assets/Logo'
import Title from './components/Title'
import Description from './components/Description'
import LinkForm from './components/LinkForm'

export default {
  name: 'App',
  components: {
    Logo,
    Title,
    Description,
    LinkForm,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import './resources/styles.scss';
</style>
