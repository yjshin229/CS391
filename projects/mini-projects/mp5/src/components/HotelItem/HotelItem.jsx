import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function HotelItem({ data }) {
  return (
    <HotelItemWrapper>
      <Thumbnail src={data.thumbnail} width={200} />
      <Title>{data.title}</Title>
    </HotelItemWrapper>
  );
}

export default HotelItem;

HotelItem.propTypes = {
  data: PropTypes.object,
};

const HotelItemWrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
  text-decoration: none;
`;

const Title = styled.h3`
  margin-left: 2%;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
`;
