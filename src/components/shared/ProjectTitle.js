import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const ProjectTitle = ({ ...props }) => (
  <h1 className="projectTitle" {...props} />
)
const ProjectSubtitle = ({ ...props }) => (
  <h2 className="projectSubtitle" {...props} />
)
const ProjectClient = ({ ...props }) => (
  <p className="projectClient" {...props} />
)

export { ProjectTitle, ProjectSubtitle, ProjectClient }
