/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 14:46:16
 * @LastEditTime: 2022-12-24 15:22:31
 */
import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.primaryColor};
  .logo{
    margin-left: 25px;
    cursor: pointer;
  }
`