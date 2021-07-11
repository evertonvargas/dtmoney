import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      font-size: .9rem;
    }

      td{
        padding: 1rem 2rem;
        color: var(--text-body);
        background: #fff;

        &:first-child{
          color: var(--text-title);
          border-radius: .25rem 0 0 0.25rem;
        }

        &:last-child{
          border-radius: 0 .25rem .25rem 0;
        }

        &.deposit{
          color: var(--green)
        }

        &.withdraw{
          color: var(--red)
        }
      }
  }

`