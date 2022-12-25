/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 02:56:38
 * @LastEditTime: 2022-12-25 16:29:57
 */
import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    &:last-child {
        margin-right: 0;
    }
    &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`