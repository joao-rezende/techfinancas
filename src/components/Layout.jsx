export default function Layout(props) {
  return (
    <main>
      <div className="container">
        {props.children}
      </div>
    </main>
  )
}