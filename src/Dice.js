export default function Dice(props) {
    return (
        <div onClick={props.holdTheDice} className={props.isHeld ? 'held dice-container display-flex' : 'dice-container display-flex'}>
            {props.diceValue}
        </div>
    )
}