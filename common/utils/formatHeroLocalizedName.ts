const formatHeroLocalizedName = (name: string): string => {
  return name.toLowerCase().replaceAll(" ", "_");
}

export default formatHeroLocalizedName
