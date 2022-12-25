/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 19:08:37
 * @LastEditTime: 2022-12-25 23:28:51
 */
import styled from "styled-components";


export const RoomWrapper = styled.div`
  display:flex;
  position:reactive;

  .title {
    font-size:22px;
    color: #222;
    font-weight:700;
  }
  .list {
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 40px 50px; 
    display:flex;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`