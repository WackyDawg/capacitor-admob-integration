# Capacitor Admob Integration

A mobile application built with Angular and Capacitor that demonstrates the integration of Google AdMob for displaying advertisements. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Features

- Angular 17.3.11 integration
- Capacitor framework for native functionality
- Google AdMob integration for mobile advertising
- Android platform support

## Prerequisites

- Node.js and npm
- Angular CLI
- Android Studio (for Android development)
- Capacitor CLI

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

### Web Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Android Development

1. Build the Angular project:
```bash
ng build
```

2. Sync the build with Capacitor:
```bash
npx cap sync
```

3. Open the project in Android Studio:
```bash
npx cap open android
```

## AdMob Configuration

The project is configured with AdMob integration. The AdMob app ID is set in `android/app/src/main/res/values/strings.xml`. Make sure to replace the existing ID with your own AdMob app ID before publishing.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

### Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Structure

- `src/` - Angular application source code
- `android/` - Android platform-specific code
- `capacitor.config.ts` - Capacitor configuration file

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

For Capacitor documentation, visit the [official Capacitor documentation](https://capacitorjs.com/docs).

For AdMob integration details, refer to the [Capacitor Community AdMob plugin documentation](https://github.com/capacitor-community/admob).
```

This README provides a comprehensive overview of the project, including setup instructions, development workflows, and important configuration details. It's structured to help both new developers getting started with the project and experienced developers who need quick reference information.

        