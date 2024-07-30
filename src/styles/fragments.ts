import { css } from "styled-components";


export const flexColumn = css`
    display: flex;
    flex-direction: column;
`

export const flexColumnCenter = css`
    ${flexColumn};
    justify-content: center;
`

export const flexRow = css`
    display: flex;
    flex-direction: row;
`