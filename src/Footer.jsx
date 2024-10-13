import React from 'react';
import { Stack, Text } from '@fluentui/react';
import Subscribe from "./Subscribe.jsx"

const Footer = () => {
  return (
    <div className="footer-div">
    <Stack styles={{ root: { backgroundColor: '#1a2f38', width: '100%', gap: 30, paddingTop: '10px'} }}>
        <Stack
        horizontal
        horizontalAlign="space-around"
        verticalAlign="stretch"

        >
        {/* Each Stack.Item will act like a flex item */}
        <Stack.Item>
            <h1>Company</h1>
            <a className="white-link" href="google.com">About Us</a>
            <br></br>
            <a className="white-link" href="google.com">Careers</a>
            <br></br>
            <a className="white-link" href="google.com">Services</a>
            <br></br>
            <a className="white-link" href="google.com">Agent Profiles</a>
        </Stack.Item>
        <Stack.Item>
            <h1>Support</h1>
            <a className="white-link" href="google.com">FAQ</a>
            <br></br>
            <a className="white-link" href="google.com">Support Center</a>
            <br></br>
            <a className="white-link" href="google.com">Contact Us</a>
        </Stack.Item>
        <Stack.Item>
            <h1>Buy & Sell</h1>
            <a className="white-link" href="google.com">Properties for Sale</a>
            <br></br>
            <a className="white-link" href="google.com">How it Works</a>
            <br></br>
            <a className="white-link" href="google.com">Properties for Rent</a>
        </Stack.Item>
        <Stack.Item>
            <h1>Subscribe and Get any News and Promo</h1>
            <p className="tiny-p">Write your email below and get much benefit for being our loyal customers.</p>
        </Stack.Item>
        </Stack>
        <Stack
        horizontal
        horizontalAlign='end'
        disableShrink
        enableScopedSelectors
        >
        {/* Each Stack.Item will act like a flex item */}   
        <Stack.Item>
            <Subscribe/>
        </Stack.Item>
        </Stack>
        <Stack
        horizontal
        horizontalAlign="space-around"
        // verticalAlign="stretch"
        >
        {/* Each Stack.Item will act like a flex item */}
        <Stack.Item>
            <a className="logo" href="google.com">Top Realtor</a>
        </Stack.Item>
        <Stack.Item>
            <div className="privacy-coookies-terms">
                <a className="blue-on-hover" href="">Privacy    </a>
                <a className="blue-on-hover" href="">Cookie Settings    </a>
                <a className="blue-on-hover" href="">Terms</a>
            </div>
        </Stack.Item>
        <Stack.Item>
            <h2>Follow us:  []   []    []</h2>
        </Stack.Item>
        </Stack>
    </Stack>
    </div>
  );
};

export default Footer;
