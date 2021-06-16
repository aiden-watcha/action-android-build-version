# android-build-version
Find your android version name through github actions


## Parameters
`gradlePath`
**Required**, File path to the **Path to the build.gradle file** so that it knows where to find the file that contains the versionCode and versionName attributes.


## Example
```
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
          
      - name: Find version
        uses: chkfung/android-build-version@master
        with:
          gradlePath: app/build.gradle # or app/build.gradle.kts 
```
