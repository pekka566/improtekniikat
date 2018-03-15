import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const ExerciseFilter = props => {
  const menuItems = props.categories.map((category, index) => {
    return (
      <MenuItem
        eventKey={index}
        key={index}
        active={props.selectedCategory === category}
        onSelect={event => props.selectCategory(index, category)}
      >
        {category}
      </MenuItem>
    );
  });

  return (
    <ButtonToolbar className="pull-right">
      <DropdownButton title="Suodata tulokset" id="dropdown-size-medium">
        {menuItems}
        <MenuItem divider />
        <MenuItem
          eventKey="clear"
          onSelect={event => props.clearSelectedCategory()}
        >
          Poista suodatus
        </MenuItem>
      </DropdownButton>
    </ButtonToolbar>
  );
};

ExerciseFilter.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  clearSelectedCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string
};

export default ExerciseFilter;
