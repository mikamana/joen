import React from 'react';

export default function ageReducer(state, action) {

  switch (action.type) {

    case 'inc_age': {

      return {
        name: state.name,
        age: state.age + 1
      }

    }
    case 'change': {

      return {

        name: action.nextName,
        age: state.age

      }

    }

  }

  return {

  }


}

