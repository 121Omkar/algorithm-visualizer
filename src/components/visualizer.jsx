import React from 'react'
import {Container, Button,Navbar, Nav} from 'react-bootstrap'
import "./visualizer.css"
import {getMergeSortAnimations } from '../algorithms/mergesort'
import {selectionsort} from '../algorithms/selectionsort'
import {insertionsort} from '../algorithms/insertionsort'
import {bubblesort} from '../algorithms/bubblesort'
import { quicksort } from '../algorithms/quicksort'

const SPEED = 3;
const PRIMARY_COLOR = "tomato";
const SECONDARY_COLOR = "red";
const SIZE = 100;
const ALGORITHMS = {
    'Mergesort':getMergeSortAnimations,
    "Selectionsort":selectionsort,
    "Insertionsort":insertionsort,
    "Bubblesort":bubblesort,
    "Quicksort":quicksort,
};
const ALGO=0;
export {ALGO}
export default class Visualizer extends React.Component {
    state = {
        name:"Bubblesort",
        numbers:[],
    }
    componentDidMount() {
        this.set_array();
    }
    set_array = () => {
        const arr = []
        for(let i = 0; i < SIZE; i++) {
            arr.push(Math.floor(Math.random()*SIZE));
        }
        this.setState({numbers:arr});
    }
    set_state = (value) => {
        console.log("name: ", value);
        this.setState({name:value,});
    }
    show = () => {
        const name = this.state.name;
        var animations;
        if(name === "BubbleSort") {
            animations = ALGORITHMS['Bubblesort'](this.state.numbers);
        }
        if(name === "InsertionSort") {
            animations = ALGORITHMS['Insertionsort'](this.state.numbers);
        }
        if(name === "SelectionSort") {
            animations = ALGORITHMS['Selectionsort'](this.state.numbers);
        }
        if(name === "QuickSort") {
            animations = ALGORITHMS['Quicksort'](this.state.numbers);
        }
        if(name === "MergeSort") {
            animations = ALGORITHMS['Mergesort'](this.state.numbers);
        }
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isColorChange] = animations[i];
            if (isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                var mod;
                switch(name) {
                    case "MergeSort":
                        mod = 3;
                        break;
                    case "SelectionSort":
                        mod = 2;
                        break;
                    case "InsertionSort":
                        mod = 2;
                        break;
                    default:
                        mod = 2;
                }
                const color = i % mod === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED);
            }
            else {
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight*4}px`;
                }, i * SPEED);
            }
        }
    }

    render() {
        const arr = this.state.numbers;
        return(
            <Container className="container-lg mt-5 bg-light bg-gradient shadow-lg p-3 mb-5 bg-body rounded">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Visualizer</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link onClick={() => this.set_state("BubbleSort")}>Bubble Sort</Nav.Link>
                            <Nav.Link onClick={() => this.set_state("InsertionSort")}>Insertion Sort</Nav.Link>
                            <Nav.Link onClick={() => this.set_state("SelectionSort")}>Selection Sort</Nav.Link>
                            <Nav.Link onClick={() => this.set_state("MergeSort")}>Merge Sort</Nav.Link>
                            <Nav.Link onClick={() => this.set_state("QuickSort")}>Quick Sort</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            <Container className="mt-5 inline-block">
                <Container className="array-container mt-5 mb-5" id='box'>
                    {arr.map((value, idx) => (
                        <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value*4}px`,
                        }}></div>
                    ))}
                </Container>
                <Container>
                <Button onClick={() => this.set_array()}>Generate Array</Button>
                <Button onClick={() => this.show()}>RUN</Button>
                </Container>
            </Container>
            </Container>
        )
    }
};

