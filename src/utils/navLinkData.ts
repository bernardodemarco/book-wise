export function getTextOnSlug(
  slug: '' | 'explore' | 'profile',
): 'Início' | 'Explorar' | 'Perfil' {
  if (slug === '') {
    return 'Início'
  } else if (slug === 'explore') {
    return 'Explorar'
  } else {
    return 'Perfil'
  }
}
