import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function Pion(props) {
  return <Draggable
	  axis="x"
	  handle=".handle"
	  defaultPosition={{x: 0, y: 0}}
	  position={null}
	  grid={[25, 25]}
	  scale={1}
	  onStart={this.handleStart}
	  onDrag={this.handleDrag}
	  onStop={this.handleStop}>
	  <div className="pion pion-xs pion-faceoff" draggable="true">
		  <p className="pion--texte">{props.lettre}</p>
	  </div>
  </Draggable>;
}

// get_availables_lettres (mets à jour la pioche)
// post select_lettre (user, id_lettre)
// post echange (id_lettre)
// post start (quand tous les joueurs on selectionné leurs lettres)
// post move_lettre (id_lettre, position_dans_la_grille)
// websocket

function App() {

	//TODO faire venir les lettres du serveur

	let lettres = {};
	lettres.a = 14;
	lettres.b = 3;
	lettres.c = 4;
	lettres.d = 4;
	lettres.e = 21;
	lettres.f = 3;
	lettres.g = 2;
	lettres.h = 2;
	lettres.i = 12;
	lettres.j = 1;
	lettres.k = 1;
	lettres.l = 7;
	lettres.m = 4;
	lettres.n = 9;
	lettres.o = 9;
	lettres.p = 3;
	lettres.q = 1;
	lettres.r = 9;
	lettres.s = 9;
	lettres.t = 9;
	lettres.u = 9;
	lettres.v = 3;
	lettres.w = 1;
	lettres.x = 1;
	lettres.y = 1;
	lettres.z = 2;

	toutes_lettres = [];
	Object.keys(lettres).forEach((attr) => {
		console.log(attr);
		for (let i = 0; i < lettres[attr]; i++) {
			toutes_lettres.push(attr);
		}
	});
	console.log(toutes_lettres);
	shuffleArray(toutes_lettres);
	console.log(toutes_lettres);


	//let liste_lettre = ['A', 'B', 'C'];
	return (
		<div>
			{toutes_lettres.map((l) => <Pion lettre={l} />)}
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
