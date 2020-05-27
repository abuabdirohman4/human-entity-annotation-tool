import React from 'react'
import { Helmet } from 'react-helmet'
import { Menu, Dropdown } from 'antd'

import General1 from 'components/widgets/General/1'
import General6 from 'components/widgets/General/6'
import General6v1 from 'components/widgets/General/6v1'
import List11 from 'components/widgets/Lists/11'
import Table1 from 'components/widgets/Tables/1'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a href="javascript: void(0)">Action</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript: void(0)">Another action</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript: void(0)">Something else here</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a href="javascript: void(0)">Separated link</a>
    </Menu.Item>
  </Menu>
)
class ExtraAppsJiraDashboard extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Jira Dashboard" />
        <div className="air__utils__heading">
          <h5>Jira Dashboard</h5>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card air__utils__cardMarked air__utils__cardMarked--primary">
              <div className="card-header card-header-flex">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Introduction</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Dropdown overlay={dropdownMenu} placement="bottomRight">
                    <button type="button" className="btn btn-light">
                      <i className="fe fe-more-vertical" />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <h3 className="text-dark font-size-18 font-weight-bold mb-3">Welcome to Jira</h3>
                <p>
                  New to Jira? Check out the
                  <a href="#" className="text-blue">
                    Jira User&apos;s Guide.
                  </a>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
            <div className="card air__utils__cardMarked air__utils__cardMarked--primary">
              <div className="card-header card-header-flex">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Revenue</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Dropdown overlay={dropdownMenu} placement="bottomRight">
                    <button type="button" className="btn btn-light">
                      <i className="fe fe-more-vertical" />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <General1 />
              </div>
            </div>
            <div className="card">
              <General6 />
            </div>
            <div className="card">
              <General6v1 />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card air__utils__cardMarked air__utils__cardMarked--primary">
              <div className="card-header card-header-flex">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Introduction</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Dropdown overlay={dropdownMenu} placement="bottomRight">
                    <button type="button" className="btn btn-light">
                      <i className="fe fe-more-vertical" />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <p>
                  You currently have no{' '}
                  <a href="#" className="text-blue">
                    issues
                  </a>{' '}
                  assigned to you. Enjoy your day!
                </p>
              </div>
            </div>
            <div className="card air__utils__cardMarked air__utils__cardMarked--primary">
              <div className="card-header card-header-flex">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Activity Stream</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Dropdown overlay={dropdownMenu} placement="bottomRight">
                    <button type="button" className="btn btn-light">
                      <i className="fe fe-more-vertical" />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <List11 />
              </div>
            </div>
            <div className="card air__utils__cardMarked air__utils__cardMarked--primary">
              <div className="card-header card-header-flex">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Statistics</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Dropdown overlay={dropdownMenu} placement="bottomRight">
                    <button type="button" className="btn btn-light">
                      <i className="fe fe-more-vertical" />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <Table1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExtraAppsJiraDashboard
