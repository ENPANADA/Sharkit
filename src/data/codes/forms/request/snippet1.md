## HTML

```html
<form action="#">
  <article>
    <h2>Sender Information</h2>

    <figure>
      <div>
        <label for="rpe">RPE</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 512 512">
              <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z">
              </path>
            </svg>
          </span>
          <input type="text" id="rpe" name="rpe" placeholder="RPE" value="9JU4N" disabled />
        </div>
      </div>
      <div>
        <label for="username">Name</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
            </svg>
          </span>
          <input type="text" id="username" name="username" placeholder="User Name" value="Juan Perez" disabled />
        </div>
      </div>
      <div>
        <label for="email">Email</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
            </svg>
          </span>
          <input type="text" id="email" name="email" placeholder="User Email" value="juanperez54@gmail.com" disabled />
        </div>
      </div>
    </figure>

  </article>

  <hr />

  <article>
    <h2>Request Information</h2>

    <figure>
      <div>
        <label for="area"> Area </label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
              </path>
            </svg>
          </span>
          <input type="text" id="area" name="area" placeholder="Area" value="Mexico" disabled />
        </div>
      </div>

      <div>
        <label for="department">Department</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <circle cx="10" cy="8" r="4"></circle>
              <path d="M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
              </path>
            </svg>
          </span>
          <select id="department" name="department">
            <option value="depa1">Department 1</option>
            <option value="depa2">Department 2</option>
            <option value="depa3">Department 3</option>
          </select>
        </div>
      </div>
    </figure>

    <figure>
      <div>
        <label for="request"> Request </label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 576 512">
              <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
              </path>
            </svg>
          </span>
          <select id="request" name="request">
            <option value="public" selected>Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
      <div>
        <label for="type">Type</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 512 512">
              <path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z">
              </path>
            </svg>
          </span>
          <select id="type" name="type">
            <option value="proposal" selected>Improvement Proposal</option>
            <option value="suggestion">Suggestion or Comment</option>
            <option value="special">Special Request</option>
            <option value="claim">Claim</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>
      </div>
    </figure>

    <figure>
      <div>
        <label for="file-attached">
          Attachment <small>(Optional)</small>
        </label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 384 512">
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z">
              </path>
            </svg>
          </span>
          <input id="file-attached" name="file-attached" type="file" accept=".pdf" />
        </div>
      </div>
      <div>
        <label for="personal_data">Personal data</label>
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 448 512">
              <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z">
              </path>
            </svg>
          </span>
          <select id="personal_data" name="personal_data">
            <option value="public" selected>Public</option>
            <option value="anonymous">Anonymous</option>
          </select>
        </div>
      </div>
    </figure>

    <figure>
      <div>
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Contribute to Creating a Better Work Environment" required />
      </div>
    </figure>

    <figure>
      <div>
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="8" placeholder="Write your suggestions to make it happen." required></textarea>
      </div>
    </figure>

    <figure>
      <button>
        Send
        <svg fill="currentColor" viewBox="0 0 512 512">
          <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z">
          </path>
        </svg>
      </button>
    </figure>
  </article>
</form>
 
```