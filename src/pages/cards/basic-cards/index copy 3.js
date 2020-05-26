import React from 'react'
import { Helmet } from 'react-helmet'
import { Select } from 'antd'
import Word from 'components/quran/Word'
import { State } from 'react-powerplug'
import Surah from './data.json'

// coba pake state react-powerplug
const API = 'http://localhost:5000/API/get_surah/'
const DEFAULT_QUERY = 1
const { Option } = Select
class CardsBasicCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [],
    }
    this.word_key = -1
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(res => res.json())
      .then(res => {
        this.setState({ words: res })
      })
  }

  createWord = word => {
    this.word_key += 1
    return <Word value={word.ARAB} key={this.word_key} />
  }

  createWords = words => {
    // let humanEntityIndex = []

    return words.map((word, k) => {
      if (k < words.length - 1) if (word.WORD_NUMBER !== words[k + 1].WORD_NUMBER) word.ARAB += ' '
      console.log(word)
      console.log(word['OPEN TAG'])
      if (word['OPEN TAG'] !== '') {
        word['OPEN TAG'] = word['OPEN TAG'].split('(')

        word['OPEN TAG'].forEach(v => {
          if (v !== '') word.ARAB = `${v}(${word.ARAB}`
        })

        // humanEntityIndex += humanEntityIndex.map(word["OPEN TAG"])
      }

      if (word['CLOSE TAG'] !== '') {
        word['CLOSE TAG'] = word['CLOSE TAG'].split(')')

        word['CLOSE TAG'].forEach(v => {
          // console.log(v)

          if (v !== '') word.ARAB = `${word.ARAB})${v}`
        })
      }

      return this.createWord(word)
    })
  }

  render() {
    const { words } = this.state

    return (
      <State initial={{ selectValue: 'Al Fatihah' }}>
        {({ state, setState }) => (
          <div>
            <Helmet title="Al Quran" />
            <div className="air__utils__heading">
              <h5>
                <span className="mr-3">Edit Projects</span>
              </h5>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header card-header-flex align-items-center">
                    <div className="d-flex flex-column justify-content-center mr-auto">
                      {/* <h5 className="mb-0">Al Fatihah</h5> */}
                      <div className="mb-0 width-300">
                        <Select
                          defaultValue={state.selectValue}
                          onChange={e => {
                            console.log(e)
                            setState({ e })
                          }}
                          style={{ width: 300 }}
                        >
                          {Surah.map(data => {
                            return (
                              <Option key={data.surahNumber} value={data.surahNumber}>
                                {data.surahName}
                              </Option>
                            )
                          })}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-quran text-right">{this.createWords(words)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </State>
    )
  }
}

export default CardsBasicCards