export function mixin(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}