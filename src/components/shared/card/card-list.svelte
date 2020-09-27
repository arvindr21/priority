<script lang="ts">
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Badge,
  } from "sveltestrap";
  import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import SvelteTooltip from "svelte-tooltip";
  import Icon from "fa-svelte";
  import {
    faCheck,
    faTrash,
    faPlus,
    faArchive,
  } from "@fortawesome/free-solid-svg-icons";
  let open = false;
  const toggle = () => (open = !open);

  export let heading, color, cardbg, type;

  let task = {
    title: '',
    notes: '',
    type: type,
    due: false,
    date: '',
    time: '',
    remind: '',
    reminder: ''
  }
</script>

<style lang="scss">
  @import "./card-list.scss";
</style>

<div class="row d-flex justify-content-center">
  <div class="col">
    <div class="card-hover-shadow-2x mb-3 card">
      <div
        class="card-header d-flex m-0 p-0 pl-4 pr-4 justify-content-between bg-{cardbg}">
        <h5 class="d-flex justify-content-start p-0 m-0 text-{color}">
          {heading}
          <Badge color="dark" class="rounded-circle ml-2 p-0 p-1">4</Badge>
        </h5>
        <div class="d-flex justify-content-end">
          <p on:click={toggle} class="text-white">
            <SvelteTooltip tip="Add New `{heading}` Task" top color="#000">
              <Icon icon={faPlus} class="mt-2 text-{color}" />
            </SvelteTooltip>
          </p>
          <p class="ml-3 text-white">
            <SvelteTooltip tip="View Archived `{heading}` Task" top color="#000">
              <Icon icon={faArchive} class="mt-2 text-{color}" />
            </SvelteTooltip>
          </p>
        </div>
      </div>
      <div class="scroll-area-sm">
        <perfect-scrollbar class="ps-show-limits">
          <div style="position: static;" class="ps ps--active-y">
            <div class="ps-content">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="todo-indicator bg-warning" />
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">
                          Call Sam For payments
                          <div class="badge badge-danger ml-2">Rejected</div>
                        </div>
                        <div class="widget-subheading"><i>Due by 22</i></div>
                      </div>
                      <div class="widget-content-right">
                        <button
                          class="border-0 btn-transition btn btn-outline-success
                            p-0 pl-1 pr-1">
                          <Icon icon={faCheck} />
                        </button>
                        <button
                          class="border-0 btn-transition btn btn-outline-danger
                            p-0 pl-1 pr-1">
                          <Icon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</div>

<Modal isOpen={open} {toggle}>
  <ModalHeader {toggle}>New `{heading}` Task</ModalHeader>
  <ModalBody>
    <input type="hidden" value="{type}" name="type">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Tasks</Label>
        <Input
          type="text"
          bind:value={task.title}
          placeholder="Enter New Task" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUrl">Url</Label>
        <Input
          type="url"
          name="url"
          id="exampleUrl"
          placeholder="url placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Number</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="number placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleColor">Color</Label>
        <Input
          type="color"
          name="color"
          id="exampleColor"
          placeholder="color placeholder" />
      </FormGroup>

    </Form>

  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
    <Button color="primary" on:click={toggle}>Create</Button>
  </ModalFooter>
</Modal>
