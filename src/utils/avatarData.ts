type AvatarDimensions = {
  width: number
  height: number
  borderWidth: number
}

export function getAvatarDimensionsOnSize(
  size: 'sm' | 'md' | 'lg',
): AvatarDimensions {
  if (size === 'sm') {
    return {
      width: 32,
      height: 32,
      borderWidth: 1,
    }
  } else if (size === 'md') {
    return {
      width: 40,
      height: 40,
      borderWidth: 1,
    }
  }
  return {
    width: 72,
    height: 72,
    borderWidth: 2,
  }
}
