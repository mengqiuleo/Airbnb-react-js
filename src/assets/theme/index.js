/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 15:16:53
 * @LastEditTime: 2022-12-24 20:11:07
 */
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme