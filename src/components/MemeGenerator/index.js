import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  CustomLabel,
  CustomInput,
  CustomOption,
  CustomSelect,
  GenerateButton,
  MemeGeneratorForm,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOption: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOptionId = event => {
    this.setState({activeFontSizeOption: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOption,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOption,
    })
  }

  renderGenerateForm = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOption,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput
          id="imageUrl"
          type="text"
          value={imageUrlInput}
          onChange={this.onChangeBackgroundImageUrl}
          placeHolder="Enter the Image URl"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeHolder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeHolder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOption}
          onChange={this.onChangeActiveOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, activeFontSizeId} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderGenerateForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
