# Checkout test

## 1. Architecture
The project is created using the Atomic Design System methodology.

### 1.1 Folders
- ./storybook: Configuration of Storybook
- ./public: Public resources
- ./src/components: Components used in the App.
- ./src/models: Interface models

### 1.2 Tests
The tests have been created with Jest.

### 1.3 Externals libraries
- Emotion
- Storybook
- Jest
- Fabrics UI

### 1.4 Commands
- npm run storybook -> Execute storybook
- npm run test -> Execute jest tests
- npm run start -> Execute App

## 2. Components
### 2.1 Atoms
#### 2.1.1 Comment
Draw the *value* property (Review). It does not contain any validation.

#### 2.1.2 Input text
Input (DOM) wrapper

Params:
| Name | Type | Description | Default | Mandatory |
|---|---|---|---|---|
| placeholder  | string  | input placeholder  | ""  |  no |
|  value |  string | value of input  | ""  | no  |
|  label | string  | top label  | ""  | no  |
| type  | string  | input type  | text  | no  |
|  onChange | event(void)  |  wrapper of event onchange | (value) => {}  |  no |

#### 2.1.3 Rating
Wrapper of Rating component by Fabrics UI

Params:
| Name | Type | Description | Default | Mandatory |
|---|---|---|---|---|
| max  | number  | maximum stars  | 5  |  no |
|  defaultRating |  number | default value  | 1  | no  |
|  readOnly | boolean  | property readonly  | false  | no  |

#### 2.1.4 TextArea
TextArea (DOM) wrapper

Params:
| Name | Type | Description | Default | Mandatory |
|---|---|---|---|---|
| placeholder  | string  | input placeholder  | ""  |  no |
|  value |  string | value of TextArea  | ""  | no  |
|  label | string  | top label  | ""  | no  |
|  onChange | event(void)  |  wrapper of event onchange | (value) => {}  |  no |

### 2.2 Molecules
*nothing*

### 2.3 Organisms
#### 2.3.1 Recharts
Recharts component is a mocked graphic component. Only display a graphic and you can't modify the data.

#### 2.3.2 Review
Contains the Review section.

Elements:
- Name
- Email
- Rating
- Comments
- Save (button)

### 2.4 Templates
#### 2.4.1 Information
Contains Review + Recharts components

### 2.5 Pages
#### 2.5.1 General
View App Page.

### 3. TODO
- Routing
- Theme
- Fetch (http client) using JSON mock
