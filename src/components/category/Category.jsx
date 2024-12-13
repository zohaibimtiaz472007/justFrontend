import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const category = [{ name: "Women" }, { name: "Men" }, { name: "Divided" }];

const Category = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div className="mydict mt-10">
        <div>
          {category.map((item, index) => {
            return (
              <label>
                <input type="radio" name="radio" defaultChecked />
                <span onClick={() => navigate(`/category/${item.name}`)} >{item.name}</span>
              </label>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  :focus {
    outline: 0;
    border-color: #4d82ff;
    box-shadow: 0 0 0 4px #2a4a8f;
  }

  .mydict div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    justify-content: center;
  }

  .mydict input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .mydict input[type="radio"]:checked + span {
    box-shadow: 0 0 0 0.0625em #4d82ff;
    background-color: #1c2b4a;
    z-index: 1;
    color: #4d82ff;
  }

  label span {
    display: block;
    cursor: pointer;
    background-color: #1e2635;
    padding: 0.375em 0.75em;
    position: relative;
    margin-left: 0.0625em;
    box-shadow: 0 0 0 0.0625em #4a5568;
    letter-spacing: 0.05em;
    color: #a0aec0;
    text-align: center;
    transition: background-color 0.5s ease;
  }

  label:first-child span {
    border-radius: 0.375em 0 0 0.375em;
  }

  label:last-child span {
    border-radius: 0 0.375em 0.375em 0;
  }
`;

export default Category;
