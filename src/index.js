import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';
import {Dedupe as DedupeIntegration} from "@sentry/integrations";
import SentryRRWeb from "@sentry/rrweb";

Sentry.init({
    dsn: "https://cb04592652b9476da8982801ef104c49@sentry.imagetrial.com/4",
    release: "3.0.0",
    integrations: [
        new Integrations.BrowserTracing(),
        new SentryRRWeb()
    ],
    tracesSampleRate: 1.0,
    initialScope: {
        tags: {"test-tag": "test-value"},
        user: {id: '123', name: "tester", email: 'test@example.com'}
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Sentry.ErrorBoundary showDialog>
          <App />
      </Sentry.ErrorBoundary>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
