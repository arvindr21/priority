<script lang="ts">
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Badge,
  } from "sveltestrap";
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

  export let heading, color, cardbg;
  import controller from './card-list.controller';
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
  <ModalHeader {toggle}>{heading}</ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggle}>Do Something</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
