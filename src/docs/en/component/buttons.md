---
path: "/component/buttons"
subnav: "2/Standard/Standard/3"
lang: "en"
title: "Buttons"
---
<helmet>
<title> Buttons - Aurora Design System </title>
</helmet>

# Buttons

<container style="width: 100%; margin-bottom: 20px">
    <mdcol>
        <row>
            <mdcol className="col-5"><h5>Buttons</h5> </mdcol>
            <mdcol className="col-3"><h5>Full width Buttons</h5> </mdcol>
            <mdcol className="col-4"><h5>Button Groups</h5> </mdcol>
        </row>
        <row>
            <mdcol className="col-5"> <button color="primary">Primary</button> <button color="secondary" outline="true">Secondary</button></mdcol>
            <mdcol className="col-3"> <button color="primary" block="true">Primary</button> </mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="primary">Left</button>
                    <button color="primary">Middle</button>
                    <button color="primary">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-5"> <button color="primary" active="true">Primary</button> <button color="secondary" outline="true" active="true">Secondary</button></mdcol>
            <mdcol className="col-3"> <button color="primary" block="true" active="true">Primary</button> </mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="secondary">Left</button>
                    <button color="primary">Middle</button>
                    <button color="primary">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-5"> <button color="primary" disabled="true">Primary</button> <button color="secondary" outline="true" disabled="true">Secondary</button> </mdcol>
            <mdcol className="col-3"> <button color="primary" block="true" disabled="true">Primary</button> </mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="primary">Left</button>
                    <button color="secondary">Middle</button>
                    <button color="primary">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-5"> <button size="sm" color="primary">Primary</button> <button size="sm" color="primary" disabled="true">Primary</button> <button size="sm" color="primary">Primary</button> <button size="sm" color="primary" disabled="true">Primary</button>  </mdcol>
            <mdcol className="col-3"><button color="primary" block="true" outline="true">Primary</button></mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="primary">Left</button>
                    <button color="primary">Middle</button>
                    <button color="secondary">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-5"> <button size="sm" color="primary" outline="true">Primary</button> <button size="sm" color="primary" disabled="true" outline="true">Primary</button> <button size="sm" color="primary" outline="true">Primary</button> <button size="sm" color="primary" disabled="true" outline="true">Primary</button></mdcol>
            <mdcol className="col-3"> <button color="primary" block="true" active="true">Primary</button> </mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="primary" disabled="true">Left</button>
                    <button color="primary">Middle</button>
                    <button color="primary" disabled="true">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-5"></mdcol>
            <mdcol className="col-3"> <button color="primary" block="true" disabled="true" outline="true">Primary</button> </mdcol>
            <mdcol className="col-4">
                <buttongroup>
                    <button color="primary">Left</button>
                    <button color="primary" disabled="true">Middle</button>
                    <button color="primary">Right</button>
                </buttongroup>
            </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-4"><h5>Dropdown Buttons</h5> </mdcol>
        </row>
        <row style="margin-top: 10px">
            <mdcol className="col-12"><mdbuttondropdown color="primary" title="Dropdown"></mdbuttondropdown> <mdbuttondropdown color="secondary" title="Dropdown"></mdbuttondropdown> <mdbuttondropdown color="primary" disabled="true" title="Dropdown"></mdbuttondropdown> <mdbuttondropdown color="secondary" disabled="true" title="Dropdown"></mdbuttondropdown></mdcol>
        </row>
    </mdcol>
</container>


## Best Practices

Buttons tend to have visual prominence on any given page or window. Primary buttons, buttons that indicate a call to action, are the most prominent. Secondary buttons, which indicate less commonly used actions, should be less prominent than primary buttons. Buttons always indicate an action and are not to be used for navigation. Buttons are placed where a user should expect them, i.e. in close proximity to the other elements that the action affects.

## Size and Padding

Buttons used in this design system have a minimum size of 30px by 30px. This is the typical size of a user's finger pad when using the application on mobile. For web this minimum size is also consistent.

The more white-space, padding, around a button, the more prominent the button appears on the page. Most buttons in this system use 15px of padding, unless are otherwise indicated.

## Labels

Button labels should be clear and specific. Avoid generic terms like Save, Submit or Cancel. Buttons should indicate the exact action that is taken and should provide a clear idea of what will happen next.

Examples of good button labels: Add a blog post, Send message, Save draft.

All labels should capitalize only the first letter of the label.

Label text has high contrast with the button colour. See Colour for more information about acceptable contrast.

## Varying States

![Image of different button states](../../../img\examples\button states.png)

Buttons are not one-state objects. Most users will recognize a button because of its hover and active states. Varying states also provide feedback to the user at each stage of performing the action.

Buttons should include normal, hover, focus, active and disabled states:

**Normal:** Even in its normal state, a button should look like a button! Before hovering, a user should be able to tell that an element is clickable.

**Hover:** Usually indicated by a change in colour or animation, hover states indicate to the user that the element is clickable.

**Focus:** Similar to hover states, focus states indicate that the user has tabbed to the specific button.

**Active/Pressed:** Usually indicated by a change in colour or animation, this indicates that the user has clicked or pressed a button/

**Disabled:** Usually a ghosted version of the normal state, this indicates to the user that the action is unavailable.

## Primary Buttons

Primary buttons identify a call to action. Use these buttons for actions that a user is encouraged to take, such as: Add a blog post, Send message, or Login. Try to keep button labels limited to one or two words.

Primary buttons are designed to have high contrast against the background and the heaviest visual weight. They typically use brighter colours than other elements on the form or layout, and are located in a visible and accessible area of the page.

Primary buttons use the primary colour, with white text. Sizing of the button depends on the length of the action words.

Each of the states for primary buttons are as follows:

**Regular state:** primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px.

<button color="primary">Regular</button>
<codeblock html='<button type="button" class="btn btn-primary">Primary</button>' react='<Button color="primary">Primary</Button>'></codeblock>

**Hover state:** primary colour at 80% opacity, white text, with a border radius of 4px and padding of 15px.

<button color="primary" style="color: #fff; background-color: #245e83; border-color: #215679">Hover</button>

**Focus state:** primary colour at 80% opacity, white text, with a border radius of 4px and padding of 15px. Includes a 3px stroke in the primary colour.

<button color="primary" disabled="true">Primary</button>

<button color="primary" style="outline: 1px dotted; outline: 5px auto -webkit-focus-ring-color;">Focus</button>

<button color="primary" style="color: #fff; background-color: #215679; border-color: #1e4f6f;box-shadow: 0 0 0 0.2rem rgba(44, 115, 161, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125);">Active</button>

**Disabled state:** primary colour at 60% opacity, white text, with a border radius of 4px and padding of 15px.

<button color="primary" disabled="true">Disabled</button>
<codeblock html='
    <button type="button" class="btn btn-primary" disabled>Disabled</button>
' react=''></codeblock>

### Position

Primary buttons should be located in the most prominent and convenient location possible. These buttons should also be located in close proximity to the form or the elements that are affected by the action. Generally, in a set of two, primary buttons are placed on the left and the secondary button is placed on the right.

## Secondary Buttons

Secondary buttons are used for actions that are necessary to provide, but that users may click less often. Examples include actions such as Cancel submission, Delete or Save draft. These buttons have a visual weight that is equal to or less than the majority of elements on the page. The secondary button is usually placed in close proximity to the primary button. Try to keep button labels limited to one or two words.

Secondary buttons, particularly ones used for destructive actions, should be designed in a way that deters users from clicking on it. This helps minimize mistakes.

For permanent destructive secondary actions, such as Delete, clicking the button will prompt a dialog to confirm the action. Always give the user to confirm actions that cannot be reverted.

Secondary buttons in this system are transparent with a stroke colour. Text changes colour depending on the button state. Sizing of the button depends on the length of the action words.

Each of the states for secondary buttons are as follows:

**Regular state:** transparent with a 1px stroke using the  colour <badge style="background-color: #0ba7b4;">#0ba7b4</badge>, the text is written in the same colour. Border radius of 4px and padding of 15px.

<button color="secondary">Regular</button>

<codeblock html='<button type="button" class="btn btn-secondary">Secondary</button>' react='<Button color="secondary">Secondary</Button>'></codeblock>

**Hover state:** rectangle coloured with <badge style="background-color: #098690;">#098690</badge> at 80% opacity, the text is displayed in white. Border radius of 4px and padding of 15px.

<button color="secondary" style="color: #fff; background-color: #098690; border-color: #087a84">Hover</button>

**Focus state:** transparent with a 3px stroke using <badge style="background-color: #0ba7b4;">#0ba7b4</badge>, the text is displayed in <badge style="background-color: #fff; color: black;">#fff</badge>. Border radius of 4px and padding of 15px.

<button color="secondary" style="outline: 1px dotted; outline: 5px auto -webkit-focus-ring-color;">Focus</button>

**Disabled state:** Fill colour of <badge style="background-color: #CECECE;color:black;">#CECECE</badge>, with white text. Border radius of 4px and padding of 15px.

<button color="secondary" disabled="true">Disabled</button>

<codeblock html='<button type="button" class="btn btn-secondary" disabled>Secondary</button>' react='<Button color="secondary" disabled>Secondary</Button>'></codeblock>

### Position

Secondary buttons are usually in close proximity to the primary button, but not in a location where the user might mistake the two. Secondary buttons are usually placed to the right of the primary button\_. \_They should have a consistent placement relative to the primary button to avoid confusion.

## Drop-Down Buttons

Drop down buttons display a list of items when clicked. They are used for two-step processes that may require more specific options for a singular action.

**Regular State:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height.

<mdbuttondropdown color="primary" title="Regular">

</mdbuttondropdown>

<codeblock html='
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
' react='
<ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginBottom: "15px"}} color={this.props.color}>
    <DropdownToggle caret {...this.props}>
        Reply
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
    </DropdownMenu>
</ButtonDropdown>
'></codeblock>

**Hover States:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height. Whichever piece of the button \(primary or drop-down section\) is being hovered over is shown at 80% opacity.

<mdbuttondropdown color="primary" style="color: #fff; background-color: #245e83; border-color: #215679" title="Hover">
</mdbuttondropdown>

**Focus State:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height. Whichever piece of the button \(primary or drop-down section\) is being focused on is shown at 80% opacity and includes a stroke of 3px in the primary colour.

<mdbuttondropdown color="primary" style="outline: 1px dotted; outline: 5px auto -webkit-focus-ring-color;" title="Focus">
</mdbuttondropdown>

**Pressed State:** When the drop-down arrow is pressed, this arrow section of the button is displayed at 80% opacity and a drop-down menu is displayed below. The action box uses a 1px border using <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. The box has a border radius of 4px. The width of the box is 166px, and the height depends on the number of actions, using 40px per action. On hover, the 40px around the action is displayed using <badge style="background-color: #CECECE;color:black;">#CECECE</badge>.

<buttondropdownopen style="color: #fff; background-color: #215679; border-color: #1e4f6f;box-shadow: 0 0 0 0.2rem rgba(44, 115, 161, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125);" title="Pressed">
</buttondropdownopen>

</br>
</br>
</br>
</br>
</br>
</br>

<codeblock html='
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
' react='
<ButtonDropdown direction="down" isOpen="true" toggle={this.toggle} style={{marginBottom: "15px"}} color={this.props.color}>
    <DropdownToggle caret {...this.props}>
        Reply
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
    </DropdownMenu>
</ButtonDropdown>
'></codeblock>

## Button Groups

Button groups, are a stylized way of putting multiple buttons together.

Primary actions are aligned to the left, while secondary actions are placed in the middle, and warning or destructive actions are aligned to the right.

<div class="mt-2">
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
    </div>
</div>

<codeblock html='
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
    </div>
' react='
<ButtonGroup style="margin-bottom: 15px">
    <Button color="primary">Left</Button>
    <Button color="primary">Middle</Button>
    <Button color="primary">Right</Button>
</ButtonGroup>
'></codeblock>
