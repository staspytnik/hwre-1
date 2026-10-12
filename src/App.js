import "./App.css";

function App() {
  const web = { name: "YouTube", url: "https://www.youtube.com/" };
  const colors = ["Червоний", "Синій", "Зелений"];
  return (
    <>
      <h1>Stanislav</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/HalfLifeBannerwithGordonFreeman.jpg"
        alt="Stas"
      />
      <a href={web.url}>{web.name}</a>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
