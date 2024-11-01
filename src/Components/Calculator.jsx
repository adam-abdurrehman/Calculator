import React, { useRef, useState } from 'react'

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    
    const handleEventDigit = (number) => {
      setExpression(expression + number);
    };

    const handleEventOperator = (operator) => {
      setExpression(expression + operator);
    };

    const handleEventEvaluate = () => {
      try{
        const evalResult = eval(expression)
        setResult(evalResult.toString())
      }
      catch (error) {
        setResult('Error');
      }
    };

    const handleEventClear = () => {
      setExpression('')
      setResult('')
    }

    return (
        <div className="w-1/3 flex flex-col mx-auto p-4 bg-neutral-800 rounded-lg shadow-md gap-5">
          <div className="flex flex-col justify-center h-28 p-2 gap-2 bg-neutral-700 rounded-lg shadow-md">
            <div id='ref' type="text" className="w-full rounded-lg text-right pr-2 bg-neutral-800 text-2xl font-medium" >{expression}</div>
            <div className='w-full text-right text-2xl rounded-lg font-medium pr-2 bg-neutral-800'>{result}</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('7')}>7</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('8')}>8</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('9')}>9</button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300" onClick={() => handleEventOperator('/')}>/</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('4')}>4</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('5')}>5</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('6')}>6</button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300" onClick={() => handleEventOperator('*')}>X</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('1')}>1</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('2')}>2</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('3')}>3</button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300" onClick={() => handleEventOperator('-')}>-</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('0')}>0</button>
            <button className="p-4 bg-stone-900 rounded-lg hover:bg-stone-950 shadow-md hover:shadow-lg transition duration-300" onClick={() => handleEventDigit('.')}>.</button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300" onClick={() => handleEventOperator('+')}>+</button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300" onClick={() => handleEventEvaluate('=')}>=</button>
          </div>
          <button className='bg-orange-500 p-4 rounded-lg hover:bg-orange-600' onClick={() => handleEventClear()}>
              Clear
          </button>
        </div>
      );
}

export default Calculator