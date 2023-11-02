/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import Orientation from 'react-native-orientation';

class YourComponent extends Component {
  componentDidMount() {
    // Add orientation change event listener
    Orientation.addOrientationListener(this.handleOrientationChange);
  }

  componentWillUnmount() {
    // Remove the orientation change event listener
    Orientation.removeOrientationListener(this.handleOrientationChange);
  }

  handleOrientationChange = (orientation: string) => {
    if (orientation === 'LANDSCAPE') {
      // Device is in landscape mode, you can show the second View
      this.setState({isLandscape: true});
    } else {
      // Device is in portrait mode, hide the second View
      this.setState({isLandscape: false});
    }
  };
}

function App(this: any): JSX.Element {
  const windowDimensions = useWindowDimensions();
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const click = (value: string) => {
    if (value === '') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Invalid Input');
      }
    } else {
      setInput(input + value);
    }
  };

  const isLandscape = windowDimensions.width > windowDimensions.height;

  const landscapeStyles = isLandscape
    ? {
        container: styles.landscapeContainer,
        row: styles.landscapeButtons,
        inputText: styles.landscapeInputText,
        resultText: styles.landscapeResultText,
      }
    : {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input === '' ? '0' : input}</Text>
        <Text style={styles.displayText}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => click('')}>
            <Text style={styles.clearButtonText}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('%')}>
            <Text>%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('7')}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('8')}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('9')}>
            <Text>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('*')}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('4')}>
            <Text>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('5')}>
            <Text>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('6')}>
            <Text>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('1')}>
            <Text>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('2')}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('3')}>
            <Text>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('+')}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.zeroButton}
            onPress={() => click('0')}>
            <Text style={styles.zeroButtonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => click('.')}>
            <Text>,</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => click('=')}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>

        {isLandscape && (
          <View style={styles.button}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('(')}>
                <Text>(</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click(')')}>
                <Text>)</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>mc</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>m+</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>mc-</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>mr</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('(')}>
                <Text>2nd</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click(')')}>
                <Text>x^2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>x^3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>x^y</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>e^x</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>10^</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('(')}>
                <Text>1/x</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click(')')}>
                <Text>√2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>√3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>√</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>log</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('(')}>
                <Text>x!</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click(')')}>
                <Text>sin</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>cos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>tan</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>e</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>EE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('(')}>
                <Text>Rad</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click(')')}>
                <Text>sinh</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>cosh</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>tanh</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>π</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSpecial}
                onPress={() => click('0')}>
                <Text>Rand</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393535',
    alignItems: 'center',
    justifyContent: 'center',
  },

  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  displayText: {
    fontSize: 48,
    color: '#ffae29',
  },

  buttonContainer: {
    flex: 3,
    width: '100%',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#818181',
    elevation: 3,
    margin: 2,
    padding: 20,
  },

  zeroButton: {
    alignSelf: 'center',
    margin: 2,
    flex: 2.3,
    backgroundColor: '#818181',
    padding: 35,
  },

  zeroButtonText: {
    flex: 2.3,
    alignSelf: 'center',
  },

  operatorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffae29',
    elevation: 3,
    margin: 2,
    padding: 20,
  },

  equalButtonText: {
    fontSize: 24,
  },

  clearButton: {
    flex: 2.3,
    margin: 2,
    alignSelf: 'center',
    backgroundColor: '#818181',
    elevation: 3,
    padding: 35,
  },

  clearButtonText: {
    alignSelf: 'center',
  },

  buttonSpecial: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009D94',
    flexGrow: 1,
  },

  landscapeContainer: {
    flex: 1,
  },
  landscapeButtons: {
    flex: 1,
    backgroundColor: 'lightgray',
  },

  landscapeInputText: {
    fontSize: 20,
  },
  landscapeResultText: {
    fontSize: 40,
    color: '#2a2a2a',
  },
});

export default App;
