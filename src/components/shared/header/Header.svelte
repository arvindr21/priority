<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
    Col,
    Row,
  } from "sveltestrap";

  import Icon from "fa-svelte";
  import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle";

  let icon = faQuestionCircle;

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  let open = false;
  const toggle = () => (open = !open);
</script>
 

<div class="border-bottom shadow mb-5">
  <Navbar color="dark" dark expand="sm" class="p-2">
    <NavbarBrand href="javascript:void(0)" class="pl-5">Priority</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="sm" on:update={handleUpdate}>
      <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink on:click={toggle} class="pr-1">
            Eisenhower Matrix
            <Icon {icon} class="mt-n1" />
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>

  <Modal isOpen={open} {toggle} size="lg">
    <Row>
      <Col>
        <ModalHeader {toggle}>
          <h2>Introducing the Eisenhower Matrix</h2>
        </ModalHeader>
        <ModalBody>
          <h3>What is the Eisenhower Matrix?</h3>
          <!-- svelte-ignore missing-declaration -->
          <!-- svelte-ignore missing-declaration -->
          <p>
            The Eisenhower Matrix, also referred to as Urgent-Important Matrix,
            helps you decide on and prioritize tasks by urgency and importance,
            sorting out less urgent and important tasks which you should either
            delegate or not do at all.
          </p>
          <div>
            <iframe
              title="Introducing the Eisenhower Matrix"
              width="100%"
              height="350px"
              src="https://www.youtube-nocookie.com/embed/tT89OZ7TNwc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
          <h3>Where does the name come from?</h3>
          <p>
            Dwight D. Eisenhower was the 34th President of the United States
            from 1953 until 1961. Before becoming President, he served as a
            general in the United States Army and as the Allied Forces Supreme
            Commander during World War II. He also later became NATO’s first
            supreme commander. Dwight had to make tough decisions continuously
            about which of the many tasks he should focus on each day. This
            finally led him to invent the world-famous Eisenhower principle,
            which today helps us prioritize by urgency and importance.
          </p>

          <h3>How to use the Eisenhower Matrix?</h3>
          <p>
            Prioritizing tasks by urgency and importance results in 4 quadrants
            with different work strategies:
          </p>
          <img
            src="imgs/eh_img.png"
            alt="How to use the Eisenhower Matrix"
            class="d-block w-100" />
          <p>
            We call the first quadrant Do first as its tasks are important for
            your life and career and need to be done today or tomorrow at the
            latest. You could use a timer to help you concentrate while trying
            to get as much of them done as possible.
          </p>
          <p>
            An example of this type of task could be to review an important
            document for your manager.
          </p>
          <p>
            The second quadrant we call Schedule. Its tasks are important but
            less urgent. You should list tasks you need to put in your calendar
            here.
          </p>
          <p>
            An example of that could be a long-planned restart of your gym
            activity.
          </p>
          <p>
            Professional time managers leave fewer things unplanned and
            therefore try to manage most of their work in the second quadrant,
            reducing stress by terminating urgent and important to-dos to a
            reasonable date in the near future whenever a new task comes in.
          </p>
          <p>
            The third quadrant is for those tasks you could delegate as they are
            less important to you than others but still pretty urgent. You
            should keep track of delegated tasks by e-mail, telephone or within
            a meeting to check back on their progress later.
          </p>
          <p>
            An example of a delegated task could be somebody calling you to ask
            for an urgent favor or request that you step into a meeting. You
            could delegate this responsibility by suggesting a better person for
            the job or by giving the caller the necessary information to have
            him deal with the matter himself.
          </p>
          <p>
            The fourth and last quadrant is called Don’t Do because it is there
            to help you sort out things you should not being doing at all.
          </p>
          <p>
            Discover and stop bad habits, like surfing the internet without a
            reason or gaming too long, these give you an excuse for not being
            able to deal with important tasks in the 1st and 2nd quadrant.
          </p>
          <h3>
            5 time management tips when working with the Eisenhower Matrix
          </h3>
          <ol>
            <li>
              Putting things to-do on a list frees your mind. But always
              question what is worth doing first.
            </li>
            <li>
              Try limiting yourself to no more than eight tasks per quadrant.
              Before adding another one, complete the most important one first.
              Remember: It is not about collecting but finishing tasks.
            </li>
            <li>
              You should always maintain only one list for both business and
              private tasks. That way you will never be able to complain about
              not having done anything for your family or yourself at the end of
              the day.
            </li>
            <li>
              Do not let you or others distract you. Do not let others define
              your priority. Plan in the morning, then work on your stuff. And
              in the end, enjoy the feeling of completion.
            </li>
            <li>
              Finally, try not to procrastinate that much. Not even by
              over-managing your to-dos.
            </li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <a
            href="https://www.eisenhower.me/eisenhower-matrix/"
            target="_blank">Website</a>
          <Button color="secondary" on:click={toggle}>Close</Button>
        </ModalFooter>
      </Col>
    </Row>
  </Modal>
</div>
