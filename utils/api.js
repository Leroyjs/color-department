export const BASE_URL =
  process.env.BACKEND_BASE_URL || 'https://colordepartment.la/api/v1'

export async function getContent(params = '', props = {}) {
  try {
    const res = await fetch(`${BASE_URL}/${params}`, props)
    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export function getDimensions(dimensions) {
  return (
    dimensions?.map((size) => ({
      label: size,
      value: size,
    })) || []
  )
}

export function getCasesPreviews(data = []) {
  return data?.map(({ preview }) => preview || '') || []
}

export function getOptionsByLabels(data = []) {
  return data.map((item) => ({
    value: item,
    label: item,
  }))
}

export function getSlides(projects) {
  return projects
    .filter(({ show_in_favorite }) => Boolean(show_in_favorite))
    .map(({ id, title, preview, client, colorist, short_video }) => {
      return {
        id,
        title,
        preview,
        client: client,
        colourist: colorist,
        video: short_video,
      }
    })
}

export function getSlidesTeam(projects) {
  return projects.map(
    ({ id, title, preview, client, colorist, short_video }) => {
      return {
        id,
        title,
        preview,
        client: client,
        colourist: colorist,
        video: short_video,
      }
    }
  )
}

export function getAwards(awards) {
  return awards.map(({ label, icon, project }) => {
    return {
      name: label,
      position: project,
      photo: icon,
    }
  })
}

export function getAvatars(employees) {
  let arr = []
  employees?.forEach(([key, items]) => {
    items?.forEach(({ photo }) => {
      arr.push(photo)
    })
  })
  return arr
}

export function getEmployeeModal(employees) {
  const obj = {}
  employees?.forEach(([key, items]) => {
    items?.forEach((item) => {
      obj[item.id] = {
        ...item,
      }
    })
  })
  return obj
}

export async function postContact(body) {
  try {
    await fetch(`${BASE_URL}/contact`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    return true
  } catch (e) {
    return new Error(e)
  }
}

export async function postOrder(body) {
  try {
    await fetch(`${BASE_URL}/order`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    return true
  } catch (e) {
    return new Error(e)
  }
}
