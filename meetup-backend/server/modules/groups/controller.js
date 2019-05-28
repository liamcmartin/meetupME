import Group from './model';

export const createGroup = async (req, res) => {
  const {
    name,
    description,
    // category,
  } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided!' });
  } else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a string!' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must have more than 5 char!' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided!' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a string!' });
  } else if (description.length < 5) {
    return res.status(400).json({ error: true, message: 'Description must have more than 5 char!' });
  }

  const group = new Group({ name, description });
  try {
    return res.status(201).json({ error: false, group: await group.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error when creating group' });
  }
};

export const createGroupMeetup = async (req, res) => {
  const { title, description } = req.body;
  const { groupId } = req.params;

  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided!' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a string!' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: true, message: 'Title must have more than 5 char!' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided!' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a string!' });
  } else if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'Description must have more than 10 char!' });
  }

  if (!groupId) {
    return res.status(400).json({ error: true, message: 'Group ID must be provided!' });
  }

  try {
    // eslint-disable-next-line no-console
    console.log("A");

    const [meetup, group] = await Group.addMeetup(groupId, { title, description });
    // eslint-disable-next-line no-console
    console.log("B");
    return res.status(201).json({ error: false, meetup, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Meetup can not be created!' });
  }
};
