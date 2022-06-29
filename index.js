const $spoilers = document.querySelectorAll('.spoiler')

$spoilers.forEach(($spoiler) => {
  const $header = $spoiler.querySelector('.spoiler__header')

  if ($header !== null) {
    $spoiler.classList.add('spoiler--closed')

    $header.addEventListener('click', () => {
      $spoiler.classList.toggle('spoiler--closed')
    })
  }
})
