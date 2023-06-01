<template>
  <Card>
    <template #title>
      <p>Interested in a cozy tuft of your own?</p>
    </template>
    <template #content>
      <p>I take commissions on my <a href="https://instagram.com/thetuftress" target="_blank">Instagram</a> or by email at <a href="mailto:thetuftress@gmail.com">thetuftress@gmail.com</a>!</p>
      <div class="links-container">
        <a href="https://instagram.com/thetuftress" target="_blank">
          <Button role="link">Instagram Message Me!</Button>
        </a>
        <a href="mailto:thetuftress@gmail.com" target="_blank">
          <Button role="link">Email Me!</Button>
        </a>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.links-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>