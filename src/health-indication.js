const characterHealth = (item) => {
  if (item.health > 50) {
    return 'healthy';
  }
  if (item.health >= 15 && item.health <= 50) {
    return 'wounded';
  }
  if (item.health > 0 && item.health < 15) {
    return 'critical';
  }
  return null;
};

export default characterHealth;
