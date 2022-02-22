import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownButton,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { MembersList, QuizBox, BarChart } from "../components";
import { photo13 } from "../images";

function GroupPage() {
  return (
    <div className="group-page">
      <div className="container">
        <div className="row">
          <img
            className="hero-img col-lg-5 mb-5 px-0"
            src={photo13}
            alt=""
            width="100%"
          />
          <div className="description col-lg-7 mb-5 py-5 px-0 bg-secondary">
            <h1 className="px-5">Hogwarts</h1>
            <p className="px-5">
              This is a description of the group... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="float-end col-lg-3">
          <MembersList />
        </div>
        <div className="row">
          <div className="col-lg-1">
            <DropdownButton
              id="dropdown-basic-button"
              title="Filter"
              variant="outline-primary"
            >
              <Dropdown.Item href="#/action-1">New Quizzes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Popular Quizzes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">All Quizzes</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Quizes Taken</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <Link to="/createQuiz">
              <Button variant="outline-primary">Create New Quiz +</Button>{" "}
            </Link>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="tbg-group-stats"
                value={1}
                variant="outline-primary"
              >
                Group Stats
              </ToggleButton>
              <ToggleButton
                id="tbg-compare-results"
                value={2}
                variant="outline-primary"
              >
                Compare Results
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        {/* <BarChart /> */}
        <div className="col-lg-3 mt-5">
          <QuizBox link={photo13} quizName="Hogwarts" />
        </div>
        <div className="col-lg-3 mt-5">
          <QuizBox link={photo13} quizName="Hogwarts" />
        </div>
        <div className="col-lg-3 mt-5">
          <QuizBox link={photo13} quizName="Hogwarts" />
        </div>
        <div className="col-lg-3 mt-5">
          <QuizBox link={photo13} quizName="Hogwarts" />
        </div>
      </div>
    </div>
  );
}

export default GroupPage;
