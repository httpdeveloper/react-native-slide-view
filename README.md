A simple, lightweight and fully customizable slide view animation like facebook tab.

## Usage
```
import SlideView from 'react-native-slide-view';

<SlideView>
  <YourCustomComponent />
</SlideView>

```
## Demo 
```
//Edit index.js on the root folder 

import { AppRegistry } from 'react-native';
import SlideViewExample from 'react-native-slide-view/example';

AppRegistry.registerComponent('YourAppName', () => SlideViewExample);

```

## Screenshot
![alt text](https://media.giphy.com/media/l3diRDOTnSMu8yHrq/giphy.gif)

## Installation
`npm install react-native-slide-view@https://github.com/httpdeveloper/react-native-slide-view.git --save
`
## Props 
| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| delay | integer | Delay of slide view animation (optional) | 0 |
| from | integer | Distance for slide view animation. (optional) | 10|
| direction | integer | Direction of slide view animation [For horizontal, 1 for right to left and -1 for left to right. Likewise, top to bottom and bottom to top for Vertical] (optional) | 1 |
| duration | integer | Duration of slide view animation (optional) | 160 |
| translateAxis | string | Translate axis of slide view [ x for horizontal and y for vertical] (optional) | x |
| onAfterSlide | function | Callback function after complete the animation (optional) | false |
| animate | bool | Boolean value based on event (optional) | false |
| style | [style](https://facebook.github.io/react-native/docs/style.html) | Optional style override for the slide view animation (optional) | |

# License
MIT
