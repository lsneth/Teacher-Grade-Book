import './App.css';
import GradeRow from './components/GradeRow'
import TitleRow from './components/TitleRow'

function App() {
  return (
      <div className='gradeGrid'>
        <TitleRow
          title1='Assignment 1'
          title2='Assignment 2'
          title3='Assignment 3'
          title4='Assignment 4'
          title5='Assignment 5'
          title6='Assignment 6'
          title7='Assignment 7'
          title8='Assignment 8'
          title9='Assignment 9'
          title10='Assignment 10'
        />
        <GradeRow
          name='Maeli Hansen'
          totalPoints1={11}
          totalPoints2={13}
          totalPoints3={16}
          totalPoints4={9}
          totalPoints5={5}
          totalPoints6={4}
          totalPoints7={10}
          totalPoints8={10}
          totalPoints9={11}
          totalPoints10={11}
        />
      </div>
  );
}

export default App;
