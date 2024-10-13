import React from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';
import './App.css';


/*
To Do:
 - must make it so that users can see the cursor and what they type
 - must make it so that hovering over the button no longer makes it expand
*/
const SubscriptionComponent = () => {
  return (
    <div className="subscription-container">
      <TextField
        className="subscription-input"
        placeholder="Your email address..."
        borderless
        underlined={false}
        styles={{
          fieldGroup: { border: 'none' },
          field: { backgroundColor: '#1a2f38', color: '#ffffff' },
          root: { width: '100%' },
        }}
      />
      <PrimaryButton
        className="subscription-button"
        text="Subscribe"
        onClick={(e) => console.log(e.target.name)}
        styles={{
          root: { padding: '10px 20px', boxShadow: 'none' },
          rootHovered: { backgroundColor: '#4ca886' }
        }}
      />
    </div>
  );
};

export default SubscriptionComponent;
