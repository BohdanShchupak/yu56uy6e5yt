# Changelog

## 0.1.6

### Maintenance

* Move @oclif/plugin-help from devDependencies to dependencies to resolve NPM warning.

## 0.1.5

### Maintenance

* Updated `twilio rtc:apps:video:deploy` command so that it checks for the existence of a necessary Twilio API Key before deploying the video token server.

## 0.1.4

### Maintenance

* Updated `twilio rtc:apps:video:delete` command so that it doesn't check for serverless environments before deleting the app. This allows the command to delete the app even when no environments exist.

## 0.1.3

### Features

* Updated the `twilio rtc:apps:video:deploy --override` flag behavior to update an existing Twilio Serverless instance rather than deleting and redeploying an instance. This behavior allows users to update an existing deployment's passcode without changing their application's URL. This betterment was proposed in #14.

### Maintenance

* Use the Twilio Account SID from a Twilio Function context rather than copying from a Twilio Client instance.

## 0.1.2

### Maintenance

* Addressed security alerts

## 0.1.1

### Maintenance

* Updated the token server to return the following error response with status code `400` when the request body is missing the `user_identity` field.

```json
{
    "error": {
      "message": "missing user_identity",
      "explanation": "The user_identity parameter is missing."
    }
}
```

## 0.1.0

The Twilio RTC plugin is a [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) plugin created to help developers develop and deploy real-time communication applications. To get started using this plugin, please reference the supported [apps section](https://github.com/twilio-labs/plugin-rtc/tree/v0.1.0#supported-apps).
