export function playerWinsPoint(player: any) {
  if (player.points === 0) return { ...player, points: 15 };
}
