import './App.css';
import { Input, TextArea, CheckboxFieldset, RadioButtonFieldset } from './components/Inputs';

function App() {
  const checkboxArray = ['checkbox-1', 'checkbox-2', 'checkbox-3', 'checkbox-4', 'checkbox-5', 'checkbox-6']
  const radioButtonArray = ['radio-1', 'radio-2', 'radio-3', 'radio-4', 'radio-5', 'radio-6']
  return (
    <main>
      <form id="ubForm">
        <div className="form-page active">
          <Input type='text' id='name-1' className='name-1' minLength={3} maxLength={50} beFill={true} placeholder='İsim Soyisim' />
          <Input type='date' id='birthday-1' className='input-date' beFill={true} placeholder='Doğum Tarihi' />
          <Input type='number' id='year-1' className='year' beFill={true} placeholder='Yıl' min={1990} max={2000} />
          <TextArea id='textarea-1' className='textarea' beFill={true} placeholder='Textarea-1' minLength={10} maxlength={150} />
          <CheckboxFieldset id='checkboxfieldset-1' beFill={true} title='CheckboxFieldset-1' description='Select min 1 and max 3 options.' minlimit={1} maxlimit={3} checkboxList={checkboxArray}/>
          <RadioButtonFieldset id='radiobuttonfieldset-1' beFill={true} title='RadioButtonFieldset-1' description='Radio button list' radiobuttonList={radioButtonArray}/>
        </div>
      </form>
    </main>
  );
}

export default App;
