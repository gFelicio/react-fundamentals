// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
    const usernameEl = React.useRef()

    // Criar uma var de estado de React
    // uma var de estado mantem informaçã  mesmo que o conteudo da página  seja atualizado
    // para ler o conteudo da variavel de estado,  podemos acessá-la diretamente
    // no entanto, para alterar seu conteudo usamos uma função set

    // msg = variavel de estado
    // setMsg = função que vai setar o estado na variavel
    // a funcao receberá um parametro que é o estado inciial da var
    // nesse caso, o erro tem a mensagem vazia
    // const [msg, setMsg] = React.useState('')
	const [username, setUsername] = React.useState('')
		
    function handleSubmit (event) {
        event.preventDefault()
        // let username = document.getElementById('username').value
        // let username = document.querySelector('#username').value
        let username = usernameEl.current.value
        onSubmitUsername(username)
    }
	
	function handleChange (event) {
		// capturando o valor do input username
		const val = event.target.value
		// o valor do input sera valido se o conteudo for
		// identico ao proprio conteudo em minusculas
		// const isValid = (val === val.toLowerCase())
		// setMsg(isValid ? "" : 'O valor informado deve estar em letras minúsculas')

		// pega o valor do input e já transforma em minúsculas
		setUsername(val.toLowerCase())
	}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
					Username:
				</label>
				<input ref={usernameEl}
					id="username"
					type="text"
					onChange={handleChange}
					value={username}/>
            </div>
			{/* <div style={{color:'red'}}>
				{msg}
			</div> */}
            <button type="submit">
				Submit
			</button>
        </form>
    )

    
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

// document.querySelector('form').addEventListener('submit', handleSubmit)

export default App
