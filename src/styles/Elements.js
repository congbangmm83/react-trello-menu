import styled from 'styled-components'

export const MenuDropdown = styled.div`
  text-align: center;
  position: absolute;
  top: -1px;
  right: -1px;
`

export const ExpandCollapseBase = styled.span`
  width: 36px;
  margin: 0 auto;
  font-size: 14px;
  position: relative;
  cursor: pointer;

`

export const CollapseBtn = styled(ExpandCollapseBase)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 7px solid #444;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-radius: 6px;
  }
  &:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    border-bottom: 3px solid #e3e3e3;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
`

export const ExpandBtn = styled(ExpandCollapseBase)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 7px solid #444;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-radius: 6px;
  }
  &:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 0px;
    border-top: 3px solid #e3e3e3;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
`

export const AddButton = styled.button`
  background: #5aac44;
  color: #fff;
  transition: background 0.3s ease;
  min-height: 32px;
  padding: 4px 16px;
  vertical-align: top;
  margin-top: 0;
  margin-right: 8px;
  font-weight: bold;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 0;
`

export const CancelButton = styled.button`
  background: #999999;
  color: #fff;
  transition: background 0.3s ease;
  min-height: 32px;
  padding: 4px 16px;
  vertical-align: top;
  margin-top: 0;
  font-weight: bold;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 0;
`
export const NewLaneButton = styled.button`
  background: #2B6AA3;
  border: none; 
  color: #fff;
  transition: background 0.3s ease;
  min-height: 32px;
  padding: 4px 16px;
  vertical-align: top;
  margin-top: 0; 
  margin-right: 0px; 
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 0;
`
