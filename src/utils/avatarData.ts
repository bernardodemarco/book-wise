type AvatarDimensions = [
  width: number,
  height: number,
  borderWidth: 'border' | 'border-2',
]

export function getAvatarDimensionsOnSize(
  size: 'sm' | 'md' | 'lg',
): AvatarDimensions {
  if (size === 'sm') {
    return [32, 32, 'border']
  } else if (size === 'md') {
    return [40, 40, 'border']
  }
  return [72, 72, 'border-2']
}
