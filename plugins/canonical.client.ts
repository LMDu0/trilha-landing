export default defineNuxtPlugin(() => {
  // Garantir que o canonical sempre aponte para trilhalabs.com.br
  // mesmo quando acessado via vempratrilha.com.br
  if (process.client) {
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://trilhalabs.com.br/'
        }
      ]
    })
  }
})
